import AttachMoney from "@material-ui/icons/AttachMoney";
import HomeIcon from "@material-ui/icons/Home";
import ColorLens from "@material-ui/icons/ColorLens";
import ClearAll from "@material-ui/icons/ClearAll";

export const items = [
    {
        name: "category",
        label: "Category",
        Icon: HomeIcon,
        items: [
            { name: "bracelet", label: "Bracelet" },
            { name: "jackets", label: "Jackets" },
            { name: "pants", label: "Pants" },
            { name: "skirts", label: "Skirts" },
            { name: "suits", label: "Suits" },
            { name: "high heel", label: "High heel" },
            { name: "T-Shirts & Vests", label: "T-Shirts & Vests" },
        ],
    },
    {
        name: "size",
        label: "Size",
        Icon: ClearAll,
        items: [
            { name: "one sizes", label: "One Size" },
            { name: "XXS", label: "XXS" },
            { name: "XS", label: "XS" },
            { name: "S", label: "S" },
            { name: "M", label: "M" },
            { name: "L", label: "L" },
            { name: "XL", label: "XL" },
            { name: "XXL", label: " XXL" },
        ],
    },
    {
        name: "colour",
        label: "Colour",
        Icon: ColorLens,
        items: [
            { name: "black", label: "Black" },
            { name: "blue", label: "Blue" },
            { name: "red", label: "Red" },
            { name: "yellow", label: "Yellow" },
            { name: "green", label: "Green" },
            { name: "white", label: "White" },
        ],
    },
    {
        name: "price",
        label: "Price",
        Icon: AttachMoney,

        items: [
            AttachMoney,
            { name: "200", label: "~200" },
            { name: "200-500", label: "200-500" },
            { name: "500-1000", label: "500-1000" },
            { name: "1000-1500", label: "1000-1500" },
            { name: "1500", label: "1500~" },
        ],
    },
];

