<script lang="ts">

const Path = "https://open.er-api.com/v6/latest/"

async function loadsCurrency(cur="USD") {
    const response = await fetch(`${Path}${cur}`);
    const data = await response.json();
    return data;
}

loadsCurrency().then(data => {
  currencies=Object.keys(data.rates); 
});

let currencies =[];

let selected1;
let selected2;

let ans1="";
let ans2="";

let objCurrency1
let objCurrency2


function handleChange(value, selected) {
  return value * selected;
}
</script>

<main>
  <input bind:value={ans1} on:input={() =>{
  if(!selected2){
   alert("Вы не выбрали валюту для конвертации");
   return;
  }
  ans2 = handleChange(ans1,objCurrency1[selected2])
  }}/>
  <select
   bind:value={selected1}
    on:change={() => {
      loadsCurrency(selected1).then(data => {
      objCurrency1=data.rates; 
      });
    }}
  >
		{#each currencies as currency}
			<option value={currency}>
				{currency}
			</option>
		{/each}
	</select>
  <br/>

  <input bind:value={ans2} on:input={() =>{
    if(!selected1){
     alert("Вы не выбрали валюту для конвертации");
    return;
  }
    ans1 = handleChange(ans2,objCurrency2[selected1])}}
  />
  <select
      bind:value={selected2}
        on:change={() => {
          loadsCurrency(selected2).then(data => {
          objCurrency2=data.rates; });
        }}
  >
    {#each currencies as currency}
      <option value={currency}>
        {currency}
      </option>
    {/each}
  </select>
</main>

<style>
</style>
