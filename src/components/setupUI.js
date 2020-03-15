import React from "react";

const shopItems = document.querySelectorAll('approvedShop');

export function setupUI(user){
    if (user.shopRole) {
        shopItems.forEach( item => {
            item.display = "flex";
        })
    }
}