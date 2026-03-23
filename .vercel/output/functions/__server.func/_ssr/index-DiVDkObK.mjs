import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { H as Heart, S as ShoppingBag, M as Menu, C as ChevronLeft, a as ChevronRight, T as Twitter, F as Facebook, Y as Youtube, I as Instagram } from "../_libs/lucide-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((carouselApi) => {
    if (!carouselApi) return;
    setCanScrollPrev(carouselApi.canScrollPrev());
    setCanScrollNext(carouselApi.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-3" : "-mt-3 flex-col",
        className
      ),
      ...props
    }
  ) });
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-3" : "pt-3",
        className
      ),
      ...props
    }
  );
}
const IMG = {
  hero: "/images/nike/hero-air-max-56586a.png",
  p1: "/images/nike/product-1-56586a.png",
  p2: "/images/nike/product-2-56586a.png",
  p3: "/images/nike/product-3-56586a.png",
  featured: "/images/nike/featured-feels-good-56586a.png",
  gearMenTop: "/images/nike/gear-men-top-56586a.png",
  gearMenShorts: "/images/nike/gear-men-shorts-56586a.png",
  gearWomenTop: "/images/nike/gear-women-top-56586a.png",
  gearWomenLeggings: "/images/nike/gear-women-leggings-56586a.png",
  flight: "/images/nike/flight-essentials-56586a.png",
  essMen: "/images/nike/essentials-mens-3589d0.png",
  essWomen: "/images/nike/essentials-womens-3589d0.png",
  essKids: "/images/nike/essentials-kids-3589d0.png"
};
const products = [
  {
    img: IMG.p1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "₹ 13 995"
  },
  {
    img: IMG.p2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "₹ 13 995"
  },
  {
    img: IMG.p3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "₹ 16 995"
  },
  {
    img: IMG.p2,
    name: "Nike Air Max SYSTM",
    category: "Women's Shoes",
    price: "₹ 13 995"
  }
];
const gearMen = [
  {
    img: IMG.gearMenTop,
    title: "Nike Dri-FIT ADV TechKnit Ultra",
    subtitle: "Men's Short-Sleeve Running Top",
    price: "₹ 3 895"
  },
  {
    img: IMG.gearMenShorts,
    title: "Nike Dri-FIT Challenger",
    subtitle: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2 495"
  }
];
const gearWomen = [
  {
    img: IMG.gearWomenTop,
    title: "Nike Dri-FIT ADV Run Division",
    subtitle: "Women's Long-Sleeve Running Top",
    price: "₹ 5 295"
  },
  {
    img: IMG.gearWomenLeggings,
    title: "Nike Fast",
    subtitle: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: "₹ 3 795"
  }
];
function NikeMark({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      className,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M21.7 8.3C19.4 5.9 15 5.3 11.9 6.7 7.4 8.6 3.3 12.8-.5 18.1c-.3.4-.1.9.4 1 5.1 1.2 10.4-.2 14.6-3.7 2.5-2 4.4-4.5 5.4-7.1.2-.5-.1-.8-.2-1z"
        }
      )
    }
  );
}
function NikeCarouselNav({
  shopLabel,
  columnTitle
}) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-[12.375px]", children: [
    shopLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: shopLabel }) : null,
    columnTitle ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: columnTitle }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "flex size-12 items-center justify-center rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5] disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Previous slide",
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-6 text-[#CCCCCC]", strokeWidth: 1.5 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        className: "flex size-12 items-center justify-center rounded-[24px] bg-[#E5E5E5] hover:bg-[#CCCCCC] disabled:cursor-not-allowed disabled:opacity-40",
        "aria-label": "Next slide",
        disabled: !canScrollNext,
        onClick: scrollNext,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-6 text-[#CCCCCC]", strokeWidth: 1.5 })
      }
    )
  ] });
}
function GearProductCard({
  img,
  title,
  subtitle,
  price
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "min-w-0 w-full max-w-[300px] sm:max-w-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full overflow-hidden bg-[#F5F5F5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: img,
        alt: "",
        className: "h-full w-full object-cover",
        width: 300,
        height: 300
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[21px] flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-normal leading-[1.6] text-[#757575]", children: subtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "shrink-0 text-right text-[15px] font-medium leading-[1.6] text-[#111111]", children: price })
    ] })
  ] });
}
function WideImageStory({
  image,
  imageAlt,
  kicker,
  title,
  titleClass,
  description,
  cta,
  ctaClass
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[1344/700] w-full overflow-hidden bg-[#F5F5F5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: image,
        alt: imageAlt,
        className: "h-full w-full object-cover",
        width: 1344,
        height: 700
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 w-full max-w-[1008px] text-center", children: [
      kicker ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: kicker }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: `mt-1 font-medium uppercase tracking-normal text-[#111111] ${titleClass}`,
          children: title
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-[531px] px-4 text-[15px] font-normal leading-[1.6] text-[#111111]", children: description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          className: `rounded-[30px] bg-[#111111] text-[15px] font-medium leading-[1.6] text-[#FFFFFF] ${ctaClass}`,
          children: cta
        }
      ) })
    ] })
  ] });
}
function NikeFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#111111] text-[#FFFFFF]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1440px] px-[34px] pb-10 pt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-0", children: [
        "Find A Store",
        "Become A Member",
        "Sign Up for Email",
        "Send Us Feedback",
        "Student Discounts"
      ].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          className: i < 4 ? "mb-0 block py-2 text-[10px] font-normal uppercase leading-[2.4] tracking-wide text-[#FFFFFF] hover:opacity-80" : "mt-2 block py-1 text-[9px] font-normal uppercase leading-[3.63] tracking-wide text-[#FFFFFF] hover:opacity-80",
          children: t
        },
        t
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[10px] font-normal uppercase leading-[2.4] tracking-[0.05em] text-[#FFFFFF]", children: "Get Help" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0", children: [
          ["Order Status", "text-[11px] leading-[2.55] text-[#7E7E7E]"],
          ["Delivery", "text-[12px] leading-[2.33] text-[#7E7E7E]"],
          ["Returns", "text-[12px] leading-[2.33] text-[#7E7E7E]"],
          ["Payment Options", "text-[11px] leading-[2.55] text-[#7E7E7E]"],
          [
            "Contact Us On Nike.com Inquiries",
            "text-[11px] leading-[2.55] text-[#7E7E7E]"
          ],
          [
            "Contact Us On All Other Inquiries",
            "text-[11px] leading-[2.55] text-[#7E7E7E]"
          ]
        ].map(([label, cls]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: `block py-1 font-normal hover:text-[#FFFFFF] ${cls}`,
            children: label
          }
        ) }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[10px] font-normal uppercase leading-[2.4] tracking-[0.05em] text-[#FFFFFF]", children: "About Nike" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-0", children: [
          ["News", "text-[12px] leading-[2.33] text-[#7E7E7E]"],
          ["Careers", "text-[12px] leading-[2.33] text-[#7E7E7E]"],
          ["Investors", "text-[11px] leading-[2.55] text-[#7E7E7E]"],
          ["Sustainability", "text-[11px] leading-[2.55] text-[#7E7E7E]"]
        ].map(([label, cls]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: `block py-1 font-normal hover:text-[#FFFFFF] ${cls}`,
            children: label
          }
        ) }, label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 lg:justify-end", children: [Twitter, Facebook, Youtube, Instagram].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#",
          className: "flex size-[30px] items-center justify-center rounded-full bg-[#7E7E7E]/30 text-[#FFFFFF] hover:bg-[#7E7E7E]/50",
          "aria-label": "Social",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4", strokeWidth: 1.5 })
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-6 border-t border-[#3E3E3E] pt-6 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-end gap-2 text-[12px] leading-none text-[#FFFFFF]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-[15px] w-[18px] rounded-sm border border-[#FFFFFF]/40" }),
          "India"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] leading-[1.09] text-[#7E7E7E]", children: "© 2023 Nike, Inc. All Rights Reserved" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#7E7E7E] sm:justify-end",
          "aria-label": "Legal",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#FFFFFF]", children: "Guides" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#FFFFFF]", children: "Terms of Sale" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#FFFFFF]", children: "Terms of Use" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-[#FFFFFF]", children: "Nike Privacy Policy" })
          ]
        }
      )
    ] })
  ] }) });
}
function NikeLanding() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#FFFFFF] font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-[#111111] antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#111111] focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-white",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-9 max-w-[1440px] items-center justify-between px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(NikeMark, { className: "size-6 text-[#111111]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-[15.375px] py-2.5 pl-3 pr-[6.125px] text-[11px] font-medium leading-[1.273] text-[#111111]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Find a Store" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal leading-[1.167] text-[#111111]", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Help" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal leading-[1.167] text-[#111111]", children: "|" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 w-[122.5px] items-center justify-center gap-3 px-2 text-[11px] font-medium leading-[1.273] text-[#111111]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Join Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-normal leading-[1.167]", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-center hover:opacity-70", href: "#", children: "Sign In" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-[60px] max-w-[1440px] items-center px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: "absolute left-1/2 top-1/2 flex max-w-[calc(100%-22rem)] -translate-x-1/2 -translate-y-1/2 flex-wrap justify-center gap-4 sm:gap-6 md:max-w-none text-[15px] font-medium leading-[1.6] text-[#111111]",
            "aria-label": "Primary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "New & Featured" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Men" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Women" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover:opacity-70", href: "#", children: "Kids" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-[16px] leading-normal hover:opacity-70", href: "#", children: "Sale" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-[16px] leading-normal hover:opacity-70", href: "#", children: "SNKRS" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex shrink-0 items-center gap-2 sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "hidden h-10 w-[180px] items-center rounded-[100px] bg-[#F5F5F5] pl-12 sm:flex",
              role: "search",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] font-medium leading-[1.221] text-[#CCCCCC]", children: "Search" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 py-3 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-full p-1.5 hover:bg-[#F5F5F5]",
                "aria-label": "Favorites",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "size-6", strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-full p-1.5 hover:bg-[#F5F5F5]",
                "aria-label": "Bag",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "size-6", strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-full p-1.5 hover:bg-[#F5F5F5]",
                "aria-label": "Menu",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-6", strokeWidth: 1.5 })
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex h-[58px] flex-col items-center justify-center bg-[#F5F5F5] shadow-[inset_0_-1px_0_0_#E5E5E5]",
        role: "region",
        "aria-label": "Nike app promotion",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium leading-[1.067] text-[#111111]", children: "Hello Nike App" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[320px] px-[11px] text-center text-[11px] font-normal leading-[2.182] text-[#111111] sm:max-w-none", children: "Download the app to access everything Nike. Get Your Great" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { id: "main", className: "mx-auto max-w-[1440px] px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto w-full max-w-[1344px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[1344/700] w-full overflow-hidden bg-[#F5F5F5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: IMG.hero,
            alt: "Nike Air Max Pulse on a vibrant background",
            className: "h-full w-full object-cover",
            width: 1344,
            height: 700
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-12 w-full max-w-[1008px] text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: "First Look" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-[56px] font-medium uppercase leading-[1.071] tracking-normal text-[#111111]", children: "Nike Air Max Pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-7 max-w-[512px] px-4 text-[15px] font-normal leading-[1.6] text-[#111111] lg:max-w-none lg:px-[248px]", children: "Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap justify-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-[30px] bg-[#111111] px-[22px] py-[7.5px] text-[15px] font-medium leading-[1.6] text-[#FFFFFF]",
                children: "Notify Me"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-[30px] bg-[#111111] px-[22.5px] py-[7.5px] text-[15px] font-medium leading-[1.6] text-[#FFFFFF]",
                children: "Shop Air Max"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-[84px] w-full max-w-[1344px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", containScroll: "trimSnaps" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex h-[52px] items-center justify-between pr-[7px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[22px] font-medium leading-[1.273] text-[#111111]", children: "Best of Air Max" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NikeCarouselNav, { shopLabel: "Shop" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CarouselItem,
          {
            className: "basis-full sm:basis-1/2 lg:basis-1/3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "min-w-0 pr-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full overflow-hidden bg-[#F5F5F5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.img,
                  alt: p.name,
                  className: "h-full w-full object-cover",
                  width: 441,
                  height: 441
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[21px] flex items-start justify-between gap-4 bg-[#FFFFFF]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 space-y-0 text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-medium leading-[1.6] text-[#111111]", children: p.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-normal leading-[1.6] text-[#757575]", children: p.category })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "shrink-0 text-[15px] font-medium leading-[1.6] text-[#111111]", children: p.price })
              ] })
            ] })
          },
          `${p.img}-${i}`
        )) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-[84px] w-full max-w-[1344px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-[25px] text-[23px] font-medium leading-[1.217] text-[#111111]", children: "Featured" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          WideImageStory,
          {
            image: IMG.featured,
            imageAlt: "Runner wearing Nike shoes on a scenic road",
            title: "STEP INTO WHAT FEELS GOOD",
            titleClass: "text-[54px] leading-[1.11]",
            description: "Cause everyone should know the feeling of running in that perfect pair.",
            cta: "Find Your Shoe",
            ctaClass: "px-[22.5px] py-[7.5px] pr-[23.92px]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-[84px] w-full max-w-[1356px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-[25px] text-[23px] font-medium leading-[1.217] text-[#111111]", children: "Gear Up" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-[18px] lg:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 px-1.5 lg:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", containScroll: "trimSnaps" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2.5 flex items-center justify-end pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NikeCarouselNav, { columnTitle: "Shop Men's" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "mt-[14px]", children: gearMen.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselItem,
              {
                className: "basis-full sm:basis-1/2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GearProductCard, { ...g })
              },
              g.title
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 px-1.5 lg:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", containScroll: "trimSnaps" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2.5 flex items-center justify-end pr-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NikeCarouselNav, { columnTitle: "Shop Women's" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "mt-[14px]", children: gearWomen.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselItem,
              {
                className: "basis-full sm:basis-1/2",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(GearProductCard, { ...g })
              },
              g.title
            )) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-[84px] w-full max-w-[1344px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-[25px] text-[22px] font-medium leading-[1.273] text-[#111111]", children: "Don't Miss" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          WideImageStory,
          {
            image: IMG.flight,
            imageAlt: "Jordan Brand flight essentials",
            title: "FLIGHT ESSENTIALS",
            titleClass: "text-[52px] leading-[1.15]",
            description: "Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.",
            cta: "Shop",
            ctaClass: "px-[21.5px] py-[7.5px] pr-[21.88px]"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-[84px] w-full max-w-[1356px] pb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", containScroll: "trimSnaps" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-[25px] flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[23px] font-medium leading-[1.217] text-[#111111]", children: "The Essentials" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(NikeCarouselNav, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CarouselContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full sm:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-[440px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: IMG.essMen,
                alt: "Men's essentials",
                className: "h-[540px] w-full object-cover",
                width: 440,
                height: 540
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[57px] left-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[20.69px] text-[15px] font-medium leading-[1.6] text-[#111111]",
                children: "Men's"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full sm:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-[440px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: IMG.essWomen,
                alt: "Women's essentials",
                className: "h-[540px] w-full object-cover",
                width: 440,
                height: 540
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[57px] left-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[22.39px] text-[15px] font-medium leading-[1.6] text-[#111111]",
                children: "Women's"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "basis-full sm:basis-1/2 lg:basis-1/3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-[440px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: IMG.essKids,
                alt: "Kids' essentials",
                className: "h-[540px] w-full object-cover",
                width: 440,
                height: 540
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[57px] left-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[22.69px] text-[14px] font-medium leading-[1.714] text-[#111111]",
                children: "Kids'"
              }
            ) })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto mt-[84px] max-w-[880px] pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]", children: "Icons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"].map(
            (t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#",
                className: "text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]",
                children: t
              }
            ) }, t)
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]", children: "Shoes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
            "All Shoes",
            "Custom Shoes",
            "Jordan Shoes",
            "Running Shoes"
          ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]",
              children: t
            }
          ) }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]", children: "Clothing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
            "All Clothing",
            "Modest Wear",
            "Hoodies & Pullovers",
            "Shirts & Tops"
          ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]",
              children: t
            }
          ) }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-[14px] font-medium leading-[1.714] text-[#111111]", children: "Kids'" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: [
            "Infant & Toddler Shoes",
            "Kids' Shoes",
            "Kids' Jordan Shoes",
            "Kids' Basketball Shoes"
          ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]",
              children: t
            }
          ) }, t)) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(NikeFooter, {}) })
  ] });
}
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NikeLanding, {});
}
export {
  App as component
};
