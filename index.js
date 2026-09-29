axios.get("http://localhost:3000/products").then((res) => {
    console.log(res.data);
    document.getElementById("product-table").innerHTML = res.data
    .map(
        (product,index) => `
            <tr class="hover:bg-gray-50">
                <td class="px-4 py-2 border border-gray-300">${index + 1}</td>
                <td class="px-4 py-2 border border-gray-300">${product.id}</td>
                <td class="px-4 py-2 border border-gray-300">${product.name}</td>
                <td class="px-4 py-2 border border-gray-300">${product.price.toLocaleString()}</td>
                <td class="px-4 py-2 border border-gray-300">${product.category}</td>
                <td class="px-4 py-2 border border-gray-300">${product.brand}</td>
                <td class="px-4 py-2 border border-gray-300">${product.stock}</td>
                <td class="px-4 py-2 border border-gray-300">${product.stock > 0 ? "Còn hàng" : "Hết hàng"}</td>
            </tr>
    `,).join("");
});