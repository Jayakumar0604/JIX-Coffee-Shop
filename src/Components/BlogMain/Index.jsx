import React from "react";
import { useNavigate } from "react-router-dom";

// const posts = [
//   {
//     id: 1,
//     title: "Boost your conversion rate",
//     href: "/",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Marketing", href: "/" },
//     author: {
//       name: "Michael Foster",
//       role: "Co-Founder / CTO",
//       href: "/",
//       imageUrl:
//         "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 2,
//     title: "How to use search engine optimization to drive sales",
//     href: "/",
//     description:
//       "Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.",
//     date: "Mar 10, 2020",
//     datetime: "2020-03-10",
//     category: { title: "Sales", href: "/" },
//     author: {
//       name: "Lindsay Walton",
//       role: "Front-end Developer",
//       href: "/",
//       imageUrl:
//         "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
//   {
//     id: 3,
//     title: "Improve your customer experience",
//     href: "/",
//     description:
//       "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
//     date: "Feb 12, 2020",
//     datetime: "2020-02-12",
//     category: { title: "Business", href: "/" },
//     author: {
//       name: "Tom Cook",
//       role: "Director of Product",
//       href: "/",
//       imageUrl:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//     },
//   },
// ];
const posts = [
  {
    id: 1,
    title: "Unlocking the Perfect Espresso Shot",
    href: "/blog/espresso-guide",
    description:
      "Our Head Barista shares precise steps for tamping, timing, and temperature. Achieving that rich, hazelnut-colored crema is easier than you think. Master the foundation of all great coffee.",
    date: "Oct 25, 2025",
    datetime: "2025-10-25",
    category: {
      title: "Brewing Tips",
      href: "/blog/category/brewing-tips",
    },
    author: {
      name: "Alex Costa",
      role: "Head Barista",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1557007525-2070e1766a5c?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 2,
    title: "Behind the Beans: Sourcing Our Signature Blend",
    href: "/blog/signature-blend-sourcing",
    description:
      "We trace the journey of our beans from high-altitude farms in top regions. Discover why ethical sourcing ensures a better taste and a fairer deal for coffee farmers worldwide.",
    date: "Oct 18, 2025",
    datetime: "2025-10-18",
    category: {
      title: "Coffee Origins",
      href: "/blog/category/coffee-origins",
    },
    author: {
      name: "Maria Rodriguez",
      role: "Roast Master",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1556994464-f65582f32f22?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 3,
    title: "The Magic of Cold Brew: Slow & Steady Wins the Flavor",
    href: "/blog/cold-brew-guide",
    description:
      "Learn the simple process for making delicious, less acidic cold brew at home. We detail the best beans and steep times for a smooth, rich, and refreshing concentrate every time.",
    date: "Oct 10, 2025",
    datetime: "2025-10-10",
    category: {
      title: "Brewing Tips",
      href: "/blog/category/brewing-tips",
    },
    author: {
      name: "Samir Khan",
      role: "Operations Manager",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 4,
    title: "Meet the Baker: The Secret to Our Flaky Croissants",
    href: "/blog/baker-interview",
    description:
      "Go behind the counter to meet our talented pastry chef, Ethan. Find out the key to achieving those perfect golden layers and the signature rich butter flavor in our classic pastries.",
    date: "Oct 03, 2025",
    datetime: "2025-10-03",
    category: {
      title: "Food & Treats",
      href: "/blog/category/food-treats",
    },
    author: {
      name: "Ethan Clark",
      role: "Pastry Chef",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1563729781389-1388835f8d68?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 5,
    title: "Autumn Flavors: Introducing Our Seasonal Menu",
    href: "/blog/autumn-menu-launch",
    description:
      "Explore the warm, spiced flavors of fall! Get the first look at our new Mocha Latte, Pumpkin Spice Macchiato, and the comforting Ginger Snap Cappuccino. Available starting tomorrow!",
    date: "Sep 27, 2025",
    datetime: "2025-09-27",
    category: {
      title: "New Products",
      href: "/blog/category/new-products",
    },
    author: {
      name: "Jix Team",
      role: "The Jix Family",
      href: "/about",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 6,
    title: "Coffee vs. Tea: Which Brew is Right for Your Morning?",
    href: "/blog/coffee-vs-tea",
    description:
      "We compare the caffeine levels, health benefits, and flavor profiles of coffee and tea. Whether you need a bold jolt or a gentle lift, we help you choose your daily favorite.",
    date: "Sep 20, 2025",
    datetime: "2025-09-20",
    category: {
      title: "Coffee Knowledge",
      href: "/blog/category/coffee-knowledge",
    },
    author: {
      name: "Chloe Lin",
      role: "Barista",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 7,
    title: "Why Grind Size is the Most Crucial Brewing Step",
    href: "/blog/grind-size-importance",
    description:
      "The secret to avoiding bitter or weak coffee lies in the grind. We break down the ideal particle size for French Press, Drip, and Espresso to prevent over- or under-extraction.",
    date: "Sep 12, 2025",
    datetime: "2025-09-12",
    category: {
      title: "Brewing Tips",
      href: "/blog/category/brewing-tips",
    },
    author: {
      name: "Alex Costa",
      role: "Head Barista",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1557007525-2070e1766a5c?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 8,
    title: "Jix Community Spotlight: Local Artist Exhibit",
    href: "/blog/community-art-exhibit",
    description:
      "We're featuring the beautiful work of local artist Sarah Myers this month! Learn about her inspiration, her preferred Jix drink, and when you can meet her at the shop.",
    date: "Sep 05, 2025",
    datetime: "2025-09-05",
    category: {
      title: "Community",
      href: "/blog/category/community",
    },
    author: {
      name: "Sarah Chen",
      role: "Marketing Manager",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1522928641496-e2609059f8e4?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 9,
    title: "Mastering Latte Art: The Rosetta Technique",
    href: "/blog/latte-art-rosetta",
    description:
      "Ready to move beyond the heart? Our step-by-step guide to the Rosetta pattern covers milk texturing, pour height, and wiggling motion to impress your friends and customers.",
    date: "Aug 29, 2025",
    datetime: "2025-08-29",
    category: {
      title: "Brewing Tips",
      href: "/blog/category/brewing-tips",
    },
    author: {
      name: "Chloe Lin",
      role: "Barista",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=256&h=256&fit=facearea&facepad=2&q=80",
    },
  },
  {
    id: 10,
    title: "Why Freshly Roasted Beans Truly Matter",
    href: "/blog/fresh-roast-difference",
    description:
      "The flavor of coffee peaks just days after roasting. We explain why buying freshly roasted beans delivers superior aroma and taste compared to store-bought, older alternatives.",
    date: "Aug 22, 2025",
    datetime: "2025-08-22",
    category: {
      title: "Coffee Knowledge",
      href: "/blog/category/coffee-knowledge",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "/about/team",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const BlogMain = () => {
  const Goto = useNavigate();

  const viewBlog = (post) => {
    Goto("/view-blog", { state: post });
  };

  return (
    <div className="py-24 sm:py-32 px-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <button
                  onClick={() => viewBlog(post)}
                  className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                >
                  {post.category.title}
                </button>
              </div>

              <div className="group relative grow">
                <h3 className="mt-3 text-lg font-semibold group-hover:text-gray-600">
                  <button onClick={() => viewBlog(post)} className="text-left">
                    <span className="absolute inset-0" />
                    {post.title}
                  </button>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm text-gray-600">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img
                  alt=""
                  src={post.author.imageUrl}
                  className="size-10 rounded-full bg-gray-800"
                />
                <div className="text-sm">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
