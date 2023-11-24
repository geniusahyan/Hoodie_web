const product_container = document.getElementsByClassName('product_container');

const items = [1,2,3,4,5,7];

const itemsp = items.map((item)=>{
    return `<div class="items_boxes border relative border-[#7811d1] w-[20rem] bg-[#02113f] h-[25rem] p-2 px-4 rounded">
    <h1 class="text-end text-white leading-6">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
          <span class="inline-block">4.5</span>
          
    </h1>
    <img src="./asset/hoodie.png" draggable="false" alt="">
    <div class="flex justify-between" >
        <h1 class="text-xl text-[white] mt-10">Hoodie</h1>
        <h2 class="text-xl text-[white] mt-10"> &#x20b9; 499</h2>
    </div>
</div>`
}).join('');

const tempContainer = document.createElement('div');
tempContainer.innerHTML = itemsp;

while (tempContainer.firstChild) {
    product_container[0].appendChild(tempContainer.firstChild);
  }