import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "../renderTag/RenderTag";

const RigthSidebar = () => {
  const fakeQuestions = [
    {
      id: 1,
      title: "Lorem ipsum",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet elo elo 320",
    },
  ];

  const fakeTags = [
    {
      id: 1,
      name: "javascript",
      totalQuestions: 5,
    },
    {
      id: 2,
      name: "typescript",
      totalQuestions: 121,
    },
    {
      id: 3,
      name: "react",
      totalQuestions: 33,
    },
    {
      id: 4,
      name: "css",
      totalQuestions: 1,
    },
    {
      id: 5,
      name: "html",
      totalQuestions: 23,
    },
  ];

  return (
    <section className="light-border background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div className="flex flex-1 flex-col gap-6">
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>

        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {fakeQuestions.map(({ id, title }) => {
            return (
              <Link
                href={`/questions/${id}`}
                key={id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">{title}</p>

                <Image
                  alt="arrow right"
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {fakeTags.map(({ id, name, totalQuestions }) => {
            return (
              <RenderTag
                key={id}
                id={id}
                name={name}
                totalQuestions={totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RigthSidebar;
