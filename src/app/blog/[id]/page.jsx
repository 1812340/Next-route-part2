import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import {notFound} from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    return notFound()
    // throw new Error("failed to fetch data")
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatibus aspernatur illum rem sapiente quo ex non commodi. Accusamus assumenda beatae quae dolorum, veritatis a et? Pariatur ad rem ullam.

          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/11325233/pexels-photo-11325233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Waqas</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/11325233/pexels-photo-11325233.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis fugit voluptas, eum mollitia error similique numquam hic voluptatem ex veniam tempora quas! Rem rerum ratione eligendi, cupiditate non perspiciatis.
        </p>
      </div>
    </div>

  )
}

export default BlogPost