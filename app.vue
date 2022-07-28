<template>
  <div class="container">
    <!-- <NuxtWelcome /> -->
    <h1>選擇障礙救星-英文名字產生器</h1>
    <p>勾選客製化選項後，按下"產生名字"</p>
    <div class="userOptions-container">
      <NameGeneratorOption
        v-for="option in userOptionsCard" :key="option.title"
        :userOptions = "userOptions"
        :options = "option"
      />
    </div>
    <button class="primary-btn"
    @click="computedSelectedNames"
    >產生姓名</button>
    <div class="name-card-container">
      <CardName
        v-for="(name,index) in selectNameArray" :key="name"
        :name = name
        @removeName = "removeName(index)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Gender , Popularity ,Length ,Options,OptionsCard,OptionsCategory} from './type/gloable'
import names from './nameData'
const userOptions:Options =reactive({
  gender:Gender.UNISEX,
  popularity:Popularity.TRENDY,
  length:Length.SHORT
}) 
const userOptionsCard:OptionsCard[] = [
  {
    title:'1 ) 選擇性別',
    category:OptionsCategory.GENDER,
    buttons:[Gender.GIRL,Gender.BOY,Gender.UNISEX]
  },
  {
    title:'2 ) 選擇名字的通俗與否',
    category:OptionsCategory.POPULARITY,
    buttons:[Popularity.TRENDY,Popularity.UNIQUE]
  },
  {
    title:'3 ) 選擇名字的長度',
    category:OptionsCategory.LENGTH,
    buttons:[Length.ALL,Length.LONG,Length.SHORT]
  },
]
const selectNameArray = ref<string[]>([])
function computedSelectedNames(){
  const filterNames = names
  .filter(name => name.gender === userOptions.gender)
  .filter(name => name.popularity === userOptions.popularity)
  .filter(name=>{
    if(userOptions.length === Length.ALL) return true
    else return name.length === userOptions.length
  })
  selectNameArray.value = filterNames.map(name=>name.name)
}
function removeName(index:number){
  console.log('移除',index)
  selectNameArray.value.splice(index,1)
}
</script>
<style scoped>
.container{
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}
h1{
  font-size: 3rem;
}
  .userOptions-container{
    background-color: rgb(255, 238, 236);
    border-radius: 2rem;
    padding:1rem;
    width:95%;
    margin:0 auto;
    margin-top: 4rem;
    position: relative;
  }
  .primary-btn{
    background-color: rgb(249,87,89);
    color: white;
    border-radius: 6.5rem;
    border:none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }
  .name-card-container{
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

</style>
