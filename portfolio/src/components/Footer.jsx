import Card from "./Card.jsx";

export default function Footer() {

    return<div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card p={"p-3 px-4"} flex="_" r={"rounded-t-xl"}>
            <p className="text-xs text-slate-800 text-center">Designed & developed by Vishnu Kalanad | Copyright &copy; {new Date().getFullYear()}</p>
        </Card>
    </div>
}