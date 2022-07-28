<template>
  <div class="option-container">
    <h4>{{options.title}}</h4>
    <div class="option-btns">
      <button
      v-for="(button,index) in options.buttons" :key="button"
        class="option"
        :class="handleOptionsButtonsClass(button,index)"
        @click="switchOptions(button)"
      >
        {{button}}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Gender , Popularity ,Length ,Options,OptionsCard,OptionsCategory} from '../type/gloable'
const props = defineProps<{
  userOptions: Options;
  options: OptionsCard;
}>();
function switchOptions(payload:Gender | Popularity | Length){
    switch(props.options.category){
        case OptionsCategory.GENDER :
            props.userOptions.gender = payload as Gender
            break;
        case OptionsCategory.POPULARITY :
            props.userOptions.popularity = payload as Popularity
            break;
         case OptionsCategory.LENGTH :
            props.userOptions.length = payload as Length
            break;
    }
}
function handleOptionsButtonsClass(button:Gender | Popularity | Length,index:number){
    const classNames = []
    if(props.userOptions[props.options.category] === button) classNames.push("option-active")
    if(index === 0)classNames.push("option-left")
    if(index === props.options.buttons.length-1)classNames.push("option-right")
    return classNames.join(" ")
}
</script>
<style scope>
.option-container {
  margin-bottom: 2rem;
}
.option {
  background-color: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  font-size: 1rem;
  font-weight: 200;
  color: rgb(27, 60, 138);
  cursor: pointer;
}
.option-left {
  border-radius: 1rem 0 0 1rem;
}
.option-right {
  border-radius: 0 1rem 1rem 0;
}
.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>