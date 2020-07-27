import Controller from '@ember/controller';
import Ember from 'ember';
import { action } from '@ember/object';

var sorting = 'top';
var time = 'all';


export default Controller.extend({
  subredditName: 'accidentalrenaissance',
  subredditData: [],
  actions:{
    update: function(value) {
      this.set("subredditName", value);
    },
    submit: function(value){
      this.subredditSubmitAction();
    }
  },
  init(){
    this._super(...arguments);
    this.subredditSubmitAction();
  },
  ajax: Ember.inject.service(),
  subredditSubmitAction(){
    // console.log(this.get('ajax').request('https://www.reddit.com/r/' + this.subredditName + '.json?sort=' + sorting + '&t=' + time + ''));
    this.get('ajax').request('https://www.reddit.com/r/' + this.subredditName + '/' + sorting + '.json?t=' + time).then((res)=>{
      this.set("subredditData", res);
    });
  },
  filteredChildren: Ember.computed('subredditData',function(){
    return Ember.A(this.get('subredditData.data.children'))
    .filter((c)=>{
      var imgLink = c.data.url;
      if(imgLink.search(".jpg")>0 || imgLink.search(".jpg")>0 ){
        return c;
      }
    });
  })
})
