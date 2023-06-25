import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/button'
import Image from 'next/image'

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.carTitle}>{params.category}</h1>
      {/*  */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>

          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/17324478/pexels-photo-17324478/free-photo-of-base_torres-del-paine.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill={true}
          alt=''
          />
        </div>
      </div>
{/*  */}
      {/*  */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>

          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/17324478/pexels-photo-17324478/free-photo-of-base_torres-del-paine.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill={true}
          alt=''
          />
        </div>
      </div>
{/*  */}
      {/*  */}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>

          <Image
          className={styles.img}
          src="https://images.pexels.com/photos/17324478/pexels-photo-17324478/free-photo-of-base_torres-del-paine.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          fill={true}
          alt=''
          />
        </div>
      </div>
{/*  */}



    </div>
  )
}

export default Category