const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);


const getSum = () => {  
	
    let prices = document.querySelectorAll(".prices");

    let len = prices.length;

    let sum = 0;
    for(const item of prices){
        sum += parseInt(item.textContent);
    }

    const table = document.getElementById("table");
	let ans = document.getElementById("ans");
    
    if (!ans) {
        table.innerHTML += `
            <tr>
                <td>Total</td>
                <td id="ans">${sum}</td>
            </tr>
        `;
    } else {
        ans.textContent = sum;
    }
};

getSumBtn.addEventListener("click", getSum);

