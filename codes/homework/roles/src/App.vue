<template>
  <div id="app">
    <!-- 头部 -->
    <header id="header">
      <form action="#" name="myForm">
        <input type="text" placeholder="英雄昵称" v-model="role.name">
        <input type="text" placeholder="英雄定位" list="position" v-model="role.position">
        <datalist id="position">
          <option value="法师" />
          <option value="坦克" />
          <option value="刺客" />
          <option value="射手" />
          <option value="辅助" />
        </datalist>
        <input type="text" placeholder="英雄技能" v-model="role.skill">
        <input type="text" placeholder="英雄位置" list="location" v-model="role.location">
        <datalist id="location">
          <option value="上路" />
          <option value="中路" />
          <option value="野区" />
          <option value="下路" />
        </datalist>
        <input type="text" placeholder="搜索" v-model="keywords">
      </form>
      <p class="toggle-btn" @click="handleToggleBtn">{{isEdit ? "确认编辑" : "创建角色"}}</p>
    </header>
    <!-- 英雄列表 -->
    <main id="content">
      <ul class="role-list">
        <!-- 标题行 -->
        <li class="title-row">
          <div class="item" v-for="(title, index) in titles" :key="index">{{title}}</div>
        </li>
        <!-- 数据行 -->
        <li v-for="(role, index) in filterArr()" :key="index" :data-index="index">
          <div class="item" v-for="(val, key) in role" :key="key">{{val}}</div>
          <div class="item">
            <span class="btn edit" @click="handleEdit">编辑</span>
            <span class="btn delete" @click="handleDelete">删除</span>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      keywords: '',
      isEdit: false,
      role: {},
      titles: ['英雄昵称', '英雄定位', '英雄技能', '英雄位置', '操作'],
      roles: [
        {name: '露娜', position: '打野', skill: '新月突击', location: '野区'},
        {name: '哪吒', position: '战士', skill: '炙炼火种', location: '上路'},
        {name: '雅典娜', position: '战士', skill: '真神觉醒', location: '上路'},
        {name: '苏烈', position: '坦克', skill: '豪烈万军', location: '下路'},
        {name: '王昭君', position: '法师', skill: '凛冬已至', location: '中路'},
        {name: '孙尚香', position: '射手', skill: '究极弩炮', location: '下路'},
        {name: '花木兰', position: '刺客', skill: '绽放刀锋', location: '上路'},
        {name: '周瑜', position: '法师', skill: '烽火赤壁', location: '中路'},
        {name: '明世隐', position: '辅助', skill: '泰卦·长生', location: '下路'}
      ]
    }
  },
  methods: {
    // 数据过滤
    filterArr() {
      let _this = this;
      return this.roles.filter((role) => {
        let reg = new RegExp(_this.keywords);
        return reg.test(JSON.stringify(role));
      })
    },
    // 处理创建/编辑角色
    handleToggleBtn() {
      // 异常处理
      if(!this.role.name || !this.role.position || !this.role.skill || !this.role.name) {
        alert('请完善英雄信息！')
        return;
      }
      switch(this.isEdit) {
        case true: {   // 编辑角色
          this.isEdit = false;
          alert('编辑成功！');
          this.role = {};
        }break;
        case false: {  // 创建角色
          let flag = false;
          for(let i = 0, len = this.roles.length; i < len; i++) {
            if(this.role.name == this.roles[i].name) {
              flag = true;
              break;
            }
          }
          if(flag) {
            alert('角色已存在！');
            return;
          }
          alert('创建成功！');
          this.roles.push(this.role);
        }break;
      }
    },
    // 点击编辑按钮
    handleEdit(e) {
      let index = e.target.parentElement.parentElement.dataset.index;
      this.isEdit = true;
      this.role = this.roles[index];
    },
    // 点击删除删除
    handleDelete(e) {
      alert('角色已删除！');
      let index = e.target.parentElement.parentElement.dataset.index;
      this.isEdit = false;
      this.roles.splice(index, 1);
    }
  }
}
</script>

<style>

#app {
  width: 1100px;
  margin: 60px auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul { list-style: none; padding: 0;}
/*头部*/
form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
input {
  width: 200px;
  height: 35px;
  font-size: 14px;
  outline: none;
  padding-left: 8px;
}
.toggle-btn {
  margin: 15px auto;
  width: 250px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  background: green;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
/*内容*/
#content {
  margin-top: 45px;
}

.role-list li {
  display: flex;
  justify-content: center;
  align-items: center;
}

.role-list li .item {
  width: 20%;
  height: 35px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}
.role-list li:nth-child(odd) {
  background: rgb(237, 237, 237);
}
.role-list li.title-row {
  font-weight: bold;
  background: rgb(64, 184, 131);
}
.role-list li .item:not(:last-child) {
  border-right: none;
}
.role-list li:not(:last-child) .item {
  border-bottom: none;
}

.role-list li .btn {
  width: 30%;
  height: 70%;
  margin: 0 15px;
  font-size: 13px;
  cursor: pointer;
  border-radius: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.role-list li .edit {
  background: orange;
}
.role-list li .delete {
  background: red;
}
</style>
