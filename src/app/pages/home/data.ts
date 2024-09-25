import { IoLocationSharp } from "react-icons/io5";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoMdCar } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { IconType } from "react-icons";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GiGearStick } from "react-icons/gi";
import { PiSeatFill } from "react-icons/pi";
import { GiCarDoor } from "react-icons/gi";
import car1 from '@/assets/Rent-car/car1.png'
import car2 from '@/assets/Rent-car/car2.png'
import car3 from '@/assets/Rent-car/car3.png'
import minimal from '@/assets/about/minimal 1.png'
import nissan from '@/assets/about/Nissan Versa 2013 1.png'
import ford from '@/assets/about/ford escape 2007 1.png'
import { ImageProps } from "next/image";

interface WorksProps{
id:number,
Icon:IconType,
head:string,
lead:string
}

interface PopularProps{
    id:number,
    Icon:IconType,
    lead:string
}
interface RentalProps{
    id:number,
    Img:ImageProps,
    Icon1:IconType,
    Icon2:IconType,
    Icon3:IconType,
    head:string,
    door:string,
    seat:string,
    gear:string,
    amount:string,
    button:string
}
interface AboutProps{
    id:number,
    Img:ImageProps,
    head:string,
    lead:string
}
export const Workdata:WorksProps[]=[
    {

        id:1,
        Icon:IoLocationSharp,
        head:"Choose Location",
        lead:"There are many variations available, but the majority have suffered alteration."
},
{

    id:2,
    Icon:BsCalendarDateFill,
    head:"Pickup Date",
    lead:"Many variatios available, but happen majority have suffered alteration."
},
{

    id:3,
    Icon:IoMdCar,
    head:"Find the Right Car",
    lead:"Bariations availble, but the majority have suffered are the alteration."
},
{

    id:4,
    Icon:GrDocumentText,
    head:"Book a Car",
    lead:"Are many variations available, but the majority have suffered alteration."
}
]

export const Popular:PopularProps[]=[
    {
        id:1,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Powerful Engine Lineup"
    },
    {
        id:2,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Good Fule Economy In Base model"
    },
    {
        id:3,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Exquisite Interior"
    },
    {
        id:4,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Cramped Rear Seat"
    },
    {
        id:5,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Frustating Infotainment System"
    },
    {
        id:6,
        Icon:IoIosCheckmarkCircleOutline,
        lead:"Below-Average Reliability Rating"
    }
]
export const Rental:RentalProps[]=[
    {
        id:1,
        Img:car1,
        head:"Toyota Fortuner TRD",
        Icon1:PiSeatFill,
        door:"5 Seats",
        Icon2:GiCarDoor,
        seat:"4 Door",
        Icon3:GiGearStick,
        gear:"2 Small",
        amount:"Starting at $300/days",
        button:"Rent a Car"
    },
    {
        id:2,
        Img:car2,
        head:"Bmw M2 Coupe Car",
        Icon1:PiSeatFill,
        door:"4 Seats",
        Icon2:GiCarDoor,
        seat:"2 Door",
        Icon3:GiGearStick,
        gear:"2 Small",
        amount:"Starting at $300/days",
        button:"Rent a Car"
    },
    {
        id:3,
        Img:car3,
        head:"Nissan Sentra Car",
        Icon1:PiSeatFill,
        door:"5 Seats",
        Icon2:GiCarDoor,
        seat:"4 Door",
        Icon3:GiGearStick,
        gear:"2 Small",
        amount:"Starting at $300/days",
        button:"Rent a Car"
    }
]
export const About:AboutProps[]=[
    {
        id:1,
        Img:minimal,
        head:"Hyundai loniq first review",
        lead:"There dual stage frontal impact airbags, side-impact airbags built into the front seats."

    },
    {
        id:2,
        Img:nissan,
        head:"Nissan sentra first features",
        lead:"The Nissan Sentra is a series of automobiles manufactured the Sentra has been categorized."

    },
    {
        id:3,
        Img:ford,
        head:"Ford fiesta Topline Taigan",
        lead:"The Fiesta all new car in the segment, and was smallest car Development targets indicated."

    }
]