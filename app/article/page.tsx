"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const About = dynamic(() => import("../about/page"));

const Article = () => {
  const router = useRouter();
  const artiles = [
    { id: 1, name: "artile 1" },
    { id: 2, name: "artile 2" },
    { id: 3, name: "artile 3" },
  ];

  return (
    <>
      <ul>
        {artiles.map((art) => {
          return (
            <li key={art.id}>
              <Link href={`article/${art.id}`}>{art.name}</Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Programatically navigation
      </button>
      <div>
        <About />
      </div>
    </>
  );
};

export default Article;
