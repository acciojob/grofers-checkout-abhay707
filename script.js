const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {  
	
    let prices = document.querySelectorAll(".price");

    let len = prices.length;

    let sum = 0;
    for(const item of prices){
        sum += parseInt(item.textContent);
    }

    const table = document.getElementById("table");
    
    table.innerHTML += `
        <tr>
            <td class="total_item">Total</td>
            <td id="ans">${sum}</td>
        </tr>
    `
};

getSumBtn.addEventListener("click", getSum);

