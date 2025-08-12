import { BsFillGeoAltFill } from "react-icons/bs";
import {COUNTRYDATA} from "../CountryFlags.js";

export default function CurrentLocation({place, country}) {
    return<div className="text-sm flex items-centert justify-center gap-2 w-full bg-blue-100 text-blue-900 px-2 py-1 rounded-lg">
        <div className="flex items-center justify-center"><BsFillGeoAltFill /></div>
        <p className="m-0 font-bold">{place}, { country.toUpperCase()}</p>
    </div>
}