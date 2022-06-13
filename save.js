//LogCollection用来存Log对象，用LogID作为属性，Log对象为值
var LogCollection = {}
//pLogCollectionda代理了LogCollection，用来检测内部对象的增减
var pLogCollection = new Proxy(LogCollection, {
  deleteProperty: function(target, key) {
    console.log("删掉了一份Log");
    delete target[key];
  },
  set: function(target, key, value) {
    if(target.hasOwnProperty(key)){
      console.log("修改了一条Log");
    }else{
      console.log("增加加了一条Log");
    }
    target[key] = value;
  }
})


class Log {
    constructor() {
        this.logId = 'NULL';
        this.locationId = 'NULL';
        this.soilSample = [[0.2,0.5,'MW-1-0.2-0.5m','1.0',true],
                           [0.9,1.0,'MW-1-0.9-1.0m','5.0',],
                           [6,6,'MW-1-0.9-1.0m','2.0',true],
                          ]
    }
}
//pCollection 用于存放每一个log的代理
var pCollection = {};
var i=1;
function add(){
  //log集合代理增加一个实例化log对象,熟悉为i
  pLogCollection[i]=new Log;
  pLogCollection[i].logId = i;
  //给这个实例化log对象设置代理，代理放在pCollection，键值同为i
  pCollection['p'+i] =  new Proxy(LogCollection[i], {
    //设置一个set handler，修改log属性时汇报一下
   set: function(target, key, value) {
     //不接受新增key
    if(target.hasOwnProperty(key)){
      console.log('-修改了log-'+target.logId+'-的键值-'+key+'-为-'+value)
      target[key] = value;
    }else{
      return false
    }
    }
 
  })
  i++
}