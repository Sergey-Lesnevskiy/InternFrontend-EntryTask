<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'

  
async function roll(cur="USD") {
		const response = await fetch(`https://open.er-api.com/v6/latest/${cur}`);
    const data = await response.json();
    return data
    	}

let currencies =[
]
roll().then(data => {
  currencies=Object.keys(data.rates); 
});

	let selected1;
	let selected2;

let ans1='';
let ans2='';

let obj1
let obj2


function handleChange(value, selected) {
return value * selected
}
 
</script>

<main>
<input bind:value={ans1} on:input={() =>{
  ans2 = handleChange(ans1,obj1[selected2])

  }}/>
	<select
		bind:value={selected1}
  on:change={() => {
    console.log(selected1);
    roll(selected1).then(data => {
      
    obj1=data.rates; 
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

  ans1= handleChange(ans2,obj2[selected1])}}/>
	<select
			bind:value={selected2}
        on:change={() => {
          roll(selected2).then(data => {
          obj2=data.rates; });
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
