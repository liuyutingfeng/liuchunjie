const {conMysql} = require('./mysql');
const express = require('express')

const jwt = require('jsonwebtoken'); //引入jwt模块


// 创建统一的返回报文对象
class Response {
    constructor(isSucceed, msg, code, data) {
      this.isSucceed = isSucceed;
      this.msg = msg;
      this.code = code;
      this.data = data;
    }
  }
  
// 创建路由对象--模拟路由
const router = express.Router()

//集合进行路由挂载
// 管理员登录
router.post('/admin', (req, res) => {
    let sql = `select * from admin where name = '${req.body.username}'`
    conMysql(sql).then(result => {
      if (result[0]?.password === req.body.password) {
        let response = new Response(true, '您好  管理员', 200, result)
        // jwt用户认证token
        const payload = {               //定义token的有限载荷
            name: result[0].name
           }
           const secret = 'deyun'       //给定密钥
           //定义token
        const token = jwt.sign(payload,secret,{ 
            'expiresIn':1440});// 设置过期时间
     
        res.json({ //将响应信息转换为json格式
            success: true,
            message: '管理员',
            token: token,
            data:result[0]
        })

        // res.send(result[0])
      } else {
        let response = new Response(false, '用户名或密码错误', 400)
        res.status(400).send(response)
      }
    }).catch(err => {
      res.status(500).send('数据库连接出错!')
    })
  })

        // 用户登录
router.post('/login', (req, res) => {
    let sql = `select * from user_info where username = '${req.body.username}'`
    conMysql(sql).then(result => {
      if (result[0]?.password === req.body.password) {
        let response = new Response(true, '登录成功', 200, result)
        // jwt用户认证token
        const payload = {               //定义token的有限载荷
            name: result[0].username
           }
           const secret = 'deyun'       //给定密钥
           //定义token
        const token = jwt.sign(payload,secret,{ 
            'expiresIn':1440});// 设置过期时间
     
        res.json({ //将响应信息转换为json格式
            success: true,
            message: 'Enjoy your token',
            token: token,
            data:result[0]
        })

        // res.send(result[0])
      } else {
        let response = new Response(false, '用户名或密码错误', 400)
        res.status(400).send(response)
      }
    }).catch(err => {
      res.status(500).send('数据库连接出错!')
    })
  })
  // 注册账号
  // 1.检查账号是否已存在
  // 2.插入用户信息表
  router.post('/signup', (req, res) => {
    let sql = `select * from user_info where username = '${req.body.username}'`
    conMysql(sql).then(result => {
      if(result[0] === undefined){
        // res.send("此时说明无该用户")
        let sql = `insert into user_info(username,password) values('${req.body.username}','${req.body.password}')`
        conMysql(sql).then(result=>{
             let response = new Response(true, '注册成功', 200, result)
        // jwt用户认证token
        const payload = {               //定义token的有限载荷
            name: req.body.username
           }
           const secret = 'deyun'       //给定密钥
           //定义token
        const token = jwt.sign(payload,secret,{ 
            'expiresIn':1440});// 设置过期时间
     
        res.json({ //将响应信息转换为json格式
            success: true,
            message: 'Enjoy your token',
            token: token,
            data:response.msg
        })
        }).catch(err => {
          res.status(500).send('2数据库连接出错!')
        })
      }else{
        let response = new Response(true, '该用户已存在', 200, result)
        res.send(response)
      }
      
    }).catch(err => {
      res.status(500).send('1数据库连接出错!')
    })
  })
//   注销账户
  router.get('/deleteUser', (req, res) => {
    let sql = `delete from user_info where username = '${req.query.username}'`
    conMysql(sql).then(result => {
      if (result) {
        let response = new Response(true, '已删除该账号', 200, result)
        res.send(response)
      } else {
        let response = new Response(false, 'null', 400)
        res.status(400).send(response)
      }
    }).catch(err => {
      res.status(500).send('数据库连接出错!')
    })
  })
  // 验证宠物是否已领养
  // 1.宠物是否已被领养--查询
  // 2.用户是否已有领养宠物
  router.get('/adopt', (req, res) => {
    let sql = `select * from animal_info where name = '${req.query.animalname}'`
    conMysql(sql).then(result => {
      if(result[0].status === '1'){             
        let response = new Response(true, '领养失败，宠物已被领养', 200, result);
        res.send(response)
      }else{
        let  sql = `select * from user_info where username = '${req.query.username}'`
        conMysql(sql).then(result=>{
         if(result[0].tag_animal !== null){
          let response = new Response(true, '领养失败，抱歉，限领一只', 200, result);
          res.send(response)
        }else{
          let  sql1 = `update user_info set tag_animal = '${req.query.animalname}' where username = '${req.query.username}'`    /**更新用户表 */
          let  sql2 = `update animal_info set status = '1' where name = '${req.query.animalname}'`    /**更新宠物表 */
          conMysql(sql1)
          conMysql(sql2)
          let response = new Response(true, '领养成功', 200, result);
          res.send(response)
        }
        }).catch(err => {
          res.status(500).send('2数据库连接出错!')
        })
      }
     
    }).catch(err => {
      res.status(500).send('1数据库连接出错!')
    })
  })

  // 宠物组织数据库信息
router.get("/society_info",(req,res)=>{
  const sql = 'select * from society_info ';
  conMysql(sql).then(result=>{
      res.send(result)
  })
  })
  // 组织主要人员信息
  router.get("/person_info",(req,res)=>{
      const sql = 'select * from person_info ';
      conMysql(sql).then(result=>{
          res.send(result)
      })
      })
      // 相关新闻信息
  router.get("/news_info",(req,res)=>{
      const sql = 'select * from news_info ';
      conMysql(sql).then(result=>{
          res.send(result)
      })
  })
      // 相关动物信息
  router.get("/animal_info",(req,res)=>{
      const sql = 'select * from animal_info ';
      conMysql(sql).then(result=>{
          res.send(result)
      })
      })
// 管理--普通用户信息获取
router.get("/user_info",(req,res)=>{
  const sql = 'select * from user_info ';
  conMysql(sql).then(result=>{
      res.send(result)
  })
  })
  // 管理--公告信息获取
router.get("/notice_info",(req,res)=>{
  const sql = 'select * from notice_info ';
  conMysql(sql).then(result=>{
      res.send(result)
  })
  })

      // 管理--新闻信息修改
router.post("/updatenews",(req,res)=>{
  const sql = `update news_info set text='${req.body.text}',title='${req.body.title}' where title='${req.body.oldtitle}'`;
  conMysql(sql).then(result=>{
      res.send(result)
  })
  })
  router.post("/updateanimal",(req,res)=>{
    const sql = `update animal_info set age='${req.body.age}',sex='${req.body.sex}',type='${req.body.type}',introduction='${req.body.introduction}',status='${req.body.status}'  where  name = '${req.body.name}'`;
    conMysql(sql).then(result=>{
        res.send(result)
    })
    })
    router.post("/updatenotice",(req,res)=>{
      const sql = `update notice_info set content='${req.body.newcontent}' where content='${req.body.oldcontent}'`;
      conMysql(sql).then(result=>{
          res.send(result)
      })
      })
        // 导出
        module.exports=router