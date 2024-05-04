import Image from "next/image";
import Link from "next/link";

import ItemCard from "@/components/ItemCard";

export default function Home() {
  return <>
    {/*<div style={HomeStyle}>*/}
    {/*  /!*<ItemCard*!/*/}
    {/*  /!*  imageSrc={'/drunkkurisu.jpg'}*!/*/}
    {/*  /!*  itemName={'Drunk Kurisu'}*!/*/}
    {/*  /!*  itemType={'Waifu'}*!/*/}
    {/*  /!*  price={100000000}*!/*/}
    {/*  /!*></ItemCard>*!/*/}
    {/*</div>*/}
    {/*<Link href='/test'>*/}
    {/*  <div>*/}
    {/*    What the hell*/}
    {/*  </div>*/}
    {/*</Link>*/}
  </>
}

const HomeStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  // backgroundColor: 'black'
}