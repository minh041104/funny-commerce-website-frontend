/*
  Usage:
   <ItemCard
        imageSrc={<image_file>}
        itemName={<name>}
        itemType={<type>}
        price={<price>}
      ></ItemCard>

 */
import Image from "next/image";

const ItemCard = ({imageSrc, itemName, itemType, price}) => {
  return <div style={CardStyle}>
    <div style={{
      width: '17.8125rem',
      height: '18.8125rem',
      margin: 0,
      backgroundColor: 'green'
    }}
    >
      <img
        src={imageSrc}
        alt={`${imageSrc}`}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover'
        }}
      >
      </img>
    </div>
    <div style={{
      width: '17.8125rem',
      height: '9.0625rem',
      padding: '1rem',
      backgroundColor: '#F4F5F7'
    }}>
      <p style={{
        color: '#3A3A3A',
        fontFamily: 'Poppins',
        fontSize: '1.5rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.8rem'
      }}
      >
        {itemName}
      </p>
      <p style={{
        color: '#898989',
        fontFamily: 'Poppins',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '1.5rem'
      }}>
        {itemType}
      </p>
      <p style={{
        color: '#3A3A3A',
        fontFamily: 'Poppins',
        fontSize: '1.25rem',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '1.875rem'
      }}>
        VND {price}
      </p>
    </div>

  </div>
}

const CardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '17.8125rem',
  height: '27.875rem',
  backgroundColor: 'blue',
  margin: '1rem'
}
export default ItemCard;