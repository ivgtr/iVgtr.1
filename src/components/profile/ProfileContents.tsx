import React from 'react'
import Image from 'next/image'

const Link = () => {
  const list: { [key: string]: string } = {
    Twitter: 'https://twitter.com/mawaru_hana',
    Twitter2: 'https://twitter.com/ivgtr',
    Steam: 'https://steamcommunity.com/id/ivgtr',
    Discord: 'discord:ivgtr#1332',
    Github: 'https://github.com/ivgtr',
    Amazon: 'https://amz.run/3WX9'
  }
  return (
    <section className="mt-2 dark:text-gray-300">
      <h3>Links</h3>
      <ul className="flex flex-wrap">
        {Object.keys(list).map((item, i) => {
          return (
            <li key={i}>
              <a href={list[item]} target="_brank">
                <Image src={`/brands/${item}.svg`} height="20" width="20" />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

const About = () => {
  return (
    <section className="mt-2 dark:text-gray-300">
      <h3>Name</h3>
      <p className="description">ねぎ</p>
      <h3>Profile</h3>
      <p className="description">🎂 96/11/12</p>
      <p className="description">コンテンツを消費することが得意</p>
      <h3>Like</h3>
      <p className="description">プリパラ, 少女革命ウテナ, なつくもゆるる</p>
    </section>
  )
}

const Name = () => {
  return (
    <section className="name mt-2">
      <h2 className="text-3xl text-gray-700 dark:text-gray-200">
        <span className="text-2xl mr-1">@</span>iVgtr
      </h2>
    </section>
  )
}

const Contents = () => {
  return (
    <article>
      <Name />
      <About />
      <Link />
    </article>
  )
}

export default Contents
