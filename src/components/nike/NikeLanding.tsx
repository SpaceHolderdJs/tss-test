import {
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Menu,
  ShoppingBag,
  Twitter,
  Youtube,
} from 'lucide-react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '#/components/ui/carousel'

const IMG = {
  hero: '/images/nike/hero-air-max-56586a.png',
  p1: '/images/nike/product-1-56586a.png',
  p2: '/images/nike/product-2-56586a.png',
  p3: '/images/nike/product-3-56586a.png',
  featured: '/images/nike/featured-feels-good-56586a.png',
  gearMenTop: '/images/nike/gear-men-top-56586a.png',
  gearMenShorts: '/images/nike/gear-men-shorts-56586a.png',
  gearWomenTop: '/images/nike/gear-women-top-56586a.png',
  gearWomenLeggings: '/images/nike/gear-women-leggings-56586a.png',
  flight: '/images/nike/flight-essentials-56586a.png',
  essMen: '/images/nike/essentials-mens-3589d0.png',
  essWomen: '/images/nike/essentials-womens-3589d0.png',
  essKids: '/images/nike/essentials-kids-3589d0.png',
} as const

const products = [
  {
    img: IMG.p1,
    name: 'Nike Air Max Pulse',
    category: "Women's Shoes",
    price: '₹ 13 995',
  },
  {
    img: IMG.p2,
    name: 'Nike Air Max Pulse',
    category: "Men's Shoes",
    price: '₹ 13 995',
  },
  {
    img: IMG.p3,
    name: 'Nike Air Max 97 SE',
    category: "Men's Shoes",
    price: '₹ 16 995',
  },
  {
    img: IMG.p2,
    name: 'Nike Air Max SYSTM',
    category: "Women's Shoes",
    price: '₹ 13 995',
  },
] as const

const gearMen = [
  {
    img: IMG.gearMenTop,
    title: 'Nike Dri-FIT ADV TechKnit Ultra',
    subtitle: "Men's Short-Sleeve Running Top",
    price: '₹ 3 895',
  },
  {
    img: IMG.gearMenShorts,
    title: 'Nike Dri-FIT Challenger',
    subtitle: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: '₹ 2 495',
  },
] as const

const gearWomen = [
  {
    img: IMG.gearWomenTop,
    title: 'Nike Dri-FIT ADV Run Division',
    subtitle: "Women's Long-Sleeve Running Top",
    price: '₹ 5 295',
  },
  {
    img: IMG.gearWomenLeggings,
    title: 'Nike Fast',
    subtitle: "Women's Mid-Rise 7/8 Running Leggings with Pockets",
    price: '₹ 3 795',
  },
] as const

function NikeMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M21.7 8.3C19.4 5.9 15 5.3 11.9 6.7 7.4 8.6 3.3 12.8-.5 18.1c-.3.4-.1.9.4 1 5.1 1.2 10.4-.2 14.6-3.7 2.5-2 4.4-4.5 5.4-7.1.2-.5-.1-.8-.2-1z"
      />
    </svg>
  )
}

function NikeCarouselNav({
  shopLabel,
  columnTitle,
}: {
  /** "Shop" label before arrows (Best of Air Max) */
  shopLabel?: string
  /** e.g. Shop Men's / Shop Women's — title before arrows */
  columnTitle?: string
}) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div className="flex items-center gap-[12.375px]">
      {shopLabel ? (
        <span className="text-[15px] font-medium leading-[1.6] text-[#111111]">
          {shopLabel}
        </span>
      ) : null}
      {columnTitle ? (
        <span className="text-[15px] font-medium leading-[1.6] text-[#111111]">
          {columnTitle}
        </span>
      ) : null}
      <button
        type="button"
        className="flex size-12 items-center justify-center rounded-[24px] bg-[#F5F5F5] hover:bg-[#E5E5E5] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Previous slide"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <ChevronLeft className="size-6 text-[#CCCCCC]" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        className="flex size-12 items-center justify-center rounded-[24px] bg-[#E5E5E5] hover:bg-[#CCCCCC] disabled:cursor-not-allowed disabled:opacity-40"
        aria-label="Next slide"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <ChevronRight className="size-6 text-[#CCCCCC]" strokeWidth={1.5} />
      </button>
    </div>
  )
}

function GearProductCard({
  img,
  title,
  subtitle,
  price,
}: {
  img: string
  title: string
  subtitle: string
  price: string
}) {
  return (
    <article className="min-w-0 w-full max-w-[300px] sm:max-w-none">
      <div className="aspect-square w-full overflow-hidden bg-[#F5F5F5]">
        <img
          src={img}
          alt=""
          className="h-full w-full object-cover"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-[21px] flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[15px] font-medium leading-[1.6] text-[#111111]">
            {title}
          </p>
          <p className="text-[15px] font-normal leading-[1.6] text-[#757575]">
            {subtitle}
          </p>
        </div>
        <p className="shrink-0 text-right text-[15px] font-medium leading-[1.6] text-[#111111]">
          {price}
        </p>
      </div>
    </article>
  )
}

function WideImageStory({
  image,
  imageAlt,
  kicker,
  title,
  titleClass,
  description,
  cta,
  ctaClass,
}: {
  image: string
  imageAlt: string
  kicker?: string
  title: string
  titleClass: string
  description: string
  cta: string
  ctaClass: string
}) {
  return (
    <div className="w-full">
      <div className="relative aspect-[1344/700] w-full overflow-hidden bg-[#F5F5F5]">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          width={1344}
          height={700}
        />
      </div>
      <div className="mx-auto mt-12 w-full max-w-[1008px] text-center">
        {kicker ? (
          <p className="text-[15px] font-medium leading-[1.6] text-[#111111]">
            {kicker}
          </p>
        ) : null}
        <h3
          className={`mt-1 font-medium uppercase tracking-normal text-[#111111] ${titleClass}`}
        >
          {title}
        </h3>
        <p className="mx-auto mt-6 max-w-[531px] px-4 text-[15px] font-normal leading-[1.6] text-[#111111]">
          {description}
        </p>
        <div className="mt-9 flex justify-center">
          <button
            type="button"
            className={`rounded-[30px] bg-[#111111] text-[15px] font-medium leading-[1.6] text-[#FFFFFF] ${ctaClass}`}
          >
            {cta}
          </button>
        </div>
      </div>
    </div>
  )
}

function NikeFooter() {
  return (
    <footer className="bg-[#111111] text-[#FFFFFF]">
      <div className="mx-auto max-w-[1440px] px-[34px] pb-10 pt-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          <div className="space-y-0">
            {[
              'Find A Store',
              'Become A Member',
              'Sign Up for Email',
              'Send Us Feedback',
              'Student Discounts',
            ].map((t, i) => (
              <a
                key={t}
                href="#"
                className={
                  i < 4
                    ? 'mb-0 block py-2 text-[10px] font-normal uppercase leading-[2.4] tracking-wide text-[#FFFFFF] hover:opacity-80'
                    : 'mt-2 block py-1 text-[9px] font-normal uppercase leading-[3.63] tracking-wide text-[#FFFFFF] hover:opacity-80'
                }
              >
                {t}
              </a>
            ))}
          </div>
          <div>
            <p className="mb-2 text-[10px] font-normal uppercase leading-[2.4] tracking-[0.05em] text-[#FFFFFF]">
              Get Help
            </p>
            <ul className="space-y-0">
              {[
                ['Order Status', 'text-[11px] leading-[2.55] text-[#7E7E7E]'],
                ['Delivery', 'text-[12px] leading-[2.33] text-[#7E7E7E]'],
                ['Returns', 'text-[12px] leading-[2.33] text-[#7E7E7E]'],
                ['Payment Options', 'text-[11px] leading-[2.55] text-[#7E7E7E]'],
                [
                  'Contact Us On Nike.com Inquiries',
                  'text-[11px] leading-[2.55] text-[#7E7E7E]',
                ],
                [
                  'Contact Us On All Other Inquiries',
                  'text-[11px] leading-[2.55] text-[#7E7E7E]',
                ],
              ].map(([label, cls]) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`block py-1 font-normal hover:text-[#FFFFFF] ${cls}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-[10px] font-normal uppercase leading-[2.4] tracking-[0.05em] text-[#FFFFFF]">
              About Nike
            </p>
            <ul className="space-y-0">
              {[
                ['News', 'text-[12px] leading-[2.33] text-[#7E7E7E]'],
                ['Careers', 'text-[12px] leading-[2.33] text-[#7E7E7E]'],
                ['Investors', 'text-[11px] leading-[2.55] text-[#7E7E7E]'],
                ['Sustainability', 'text-[11px] leading-[2.55] text-[#7E7E7E]'],
              ].map(([label, cls]) => (
                <li key={label}>
                  <a
                    href="#"
                    className={`block py-1 font-normal hover:text-[#FFFFFF] ${cls}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 lg:justify-end">
            {[Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex size-[30px] items-center justify-center rounded-full bg-[#7E7E7E]/30 text-[#FFFFFF] hover:bg-[#7E7E7E]/50"
                aria-label="Social"
              >
                <Icon className="size-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-[#3E3E3E] pt-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            <span className="inline-flex items-end gap-2 text-[12px] leading-none text-[#FFFFFF]">
              <span className="inline-block h-[15px] w-[18px] rounded-sm border border-[#FFFFFF]/40" />
              India
            </span>
            <span className="text-[11px] leading-[1.09] text-[#7E7E7E]">
              © 2023 Nike, Inc. All Rights Reserved
            </span>
          </div>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#7E7E7E] sm:justify-end"
            aria-label="Legal"
          >
            <a href="#" className="hover:text-[#FFFFFF]">
              Guides
            </a>
            <a href="#" className="hover:text-[#FFFFFF]">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-[#FFFFFF]">
              Terms of Use
            </a>
            <a href="#" className="hover:text-[#FFFFFF]">
              Nike Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default function NikeLanding() {
  return (
    <div className="bg-[#FFFFFF] font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-[#111111] antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[#111111] focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-white"
      >
        Skip to main content
      </a>
      <header>
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-between px-12">
          <NikeMark className="size-6 text-[#111111]" />
          <div className="flex items-center">
            <div className="flex items-center gap-[15.375px] py-2.5 pl-3 pr-[6.125px] text-[11px] font-medium leading-[1.273] text-[#111111]">
              <a className="hover:opacity-70" href="#">
                Find a Store
              </a>
              <span className="text-xs font-normal leading-[1.167] text-[#111111]">
                |
              </span>
              <a className="hover:opacity-70" href="#">
                Help
              </a>
              <span className="text-xs font-normal leading-[1.167] text-[#111111]">
                |
              </span>
            </div>
            <div className="flex h-9 w-[122.5px] items-center justify-center gap-3 px-2 text-[11px] font-medium leading-[1.273] text-[#111111]">
              <a className="hover:opacity-70" href="#">
                Join Us
              </a>
              <span className="text-xs font-normal leading-[1.167]">|</span>
              <a className="text-center hover:opacity-70" href="#">
                Sign In
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[60px] max-w-[1440px] items-center px-12">
          <nav
            className="absolute left-1/2 top-1/2 flex max-w-[calc(100%-22rem)] -translate-x-1/2 -translate-y-1/2 flex-wrap justify-center gap-4 sm:gap-6 md:max-w-none text-[15px] font-medium leading-[1.6] text-[#111111]"
            aria-label="Primary"
          >
            <a className="hover:opacity-70" href="#">
              New &amp; Featured
            </a>
            <a className="hover:opacity-70" href="#">
              Men
            </a>
            <a className="hover:opacity-70" href="#">
              Women
            </a>
            <a className="hover:opacity-70" href="#">
              Kids
            </a>
            <a className="text-[16px] leading-normal hover:opacity-70" href="#">
              Sale
            </a>
            <a className="text-[16px] leading-normal hover:opacity-70" href="#">
              SNKRS
            </a>
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <div
              className="hidden h-10 w-[180px] items-center rounded-[100px] bg-[#F5F5F5] pl-12 sm:flex"
              role="search"
            >
              <span className="text-[15px] font-medium leading-[1.221] text-[#CCCCCC]">
                Search
              </span>
            </div>
            <div className="flex items-center gap-2 py-3 sm:gap-3">
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-[#F5F5F5]"
                aria-label="Favorites"
              >
                <Heart className="size-6" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-[#F5F5F5]"
                aria-label="Bag"
              >
                <ShoppingBag className="size-6" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                className="rounded-full p-1.5 hover:bg-[#F5F5F5]"
                aria-label="Menu"
              >
                <Menu className="size-6" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className="flex h-[58px] flex-col items-center justify-center bg-[#F5F5F5] shadow-[inset_0_-1px_0_0_#E5E5E5]"
        role="region"
        aria-label="Nike app promotion"
      >
        <p className="text-[15px] font-medium leading-[1.067] text-[#111111]">
          Hello Nike App
        </p>
        <p className="max-w-[320px] px-[11px] text-center text-[11px] font-normal leading-[2.182] text-[#111111] sm:max-w-none">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>

      <main id="main" className="mx-auto max-w-[1440px] px-12">
        <section className="mx-auto w-full max-w-[1344px]">
          <div className="relative aspect-[1344/700] w-full overflow-hidden bg-[#F5F5F5]">
            <img
              src={IMG.hero}
              alt="Nike Air Max Pulse on a vibrant background"
              className="h-full w-full object-cover"
              width={1344}
              height={700}
            />
          </div>

          <div className="mx-auto mt-12 w-full max-w-[1008px] text-center">
            <p className="text-[15px] font-medium leading-[1.6] text-[#111111]">
              First Look
            </p>
            <h1 className="mt-1 text-[56px] font-medium uppercase leading-[1.071] tracking-normal text-[#111111]">
              Nike Air Max Pulse
            </h1>
            <p className="mx-auto mt-7 max-w-[512px] px-4 text-[15px] font-normal leading-[1.6] text-[#111111] lg:max-w-none lg:px-[248px]">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air
              Max Pulse —designed to push you past your limits and help you go
              to the max.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-1.5">
              <button
                type="button"
                className="rounded-[30px] bg-[#111111] px-[22px] py-[7.5px] text-[15px] font-medium leading-[1.6] text-[#FFFFFF]"
              >
                Notify Me
              </button>
              <button
                type="button"
                className="rounded-[30px] bg-[#111111] px-[22.5px] py-[7.5px] text-[15px] font-medium leading-[1.6] text-[#FFFFFF]"
              >
                Shop Air Max
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[84px] w-full max-w-[1344px]">
          <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
            <div className="mb-4 flex h-[52px] items-center justify-between pr-[7px]">
              <h2 className="text-[22px] font-medium leading-[1.273] text-[#111111]">
                Best of Air Max
              </h2>
              <NikeCarouselNav shopLabel="Shop" />
            </div>
            <CarouselContent>
              {products.map((p, i) => (
                <CarouselItem
                  key={`${p.img}-${i}`}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <article className="min-w-0 pr-0">
                    <div className="aspect-square w-full overflow-hidden bg-[#F5F5F5]">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-full w-full object-cover"
                        width={441}
                        height={441}
                      />
                    </div>
                    <div className="mt-[21px] flex items-start justify-between gap-4 bg-[#FFFFFF]">
                      <div className="min-w-0 space-y-0 text-left">
                        <p className="text-[15px] font-medium leading-[1.6] text-[#111111]">
                          {p.name}
                        </p>
                        <p className="text-[15px] font-normal leading-[1.6] text-[#757575]">
                          {p.category}
                        </p>
                      </div>
                      <p className="shrink-0 text-[15px] font-medium leading-[1.6] text-[#111111]">
                        {p.price}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        <section className="mx-auto mt-[84px] w-full max-w-[1344px]">
          <h2 className="mb-[25px] text-[23px] font-medium leading-[1.217] text-[#111111]">
            Featured
          </h2>
          <WideImageStory
            image={IMG.featured}
            imageAlt="Runner wearing Nike shoes on a scenic road"
            title="STEP INTO WHAT FEELS GOOD"
            titleClass="text-[54px] leading-[1.11]"
            description="Cause everyone should know the feeling of running in that perfect pair."
            cta="Find Your Shoe"
            ctaClass="px-[22.5px] py-[7.5px] pr-[23.92px]"
          />
        </section>

        <section className="mx-auto mt-[84px] w-full max-w-[1356px]">
          <h2 className="mb-[25px] text-[23px] font-medium leading-[1.217] text-[#111111]">
            Gear Up
          </h2>
          <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
            <div className="min-w-0 px-1.5 lg:px-0">
              <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
                <div className="mb-2.5 flex items-center justify-end pr-1">
                  <NikeCarouselNav columnTitle="Shop Men's" />
                </div>
                <CarouselContent className="mt-[14px]">
                  {gearMen.map((g) => (
                    <CarouselItem
                      key={g.title}
                      className="basis-full sm:basis-1/2"
                    >
                      <GearProductCard {...g} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="min-w-0 px-1.5 lg:px-0">
              <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
                <div className="mb-2.5 flex items-center justify-end pr-1">
                  <NikeCarouselNav columnTitle="Shop Women's" />
                </div>
                <CarouselContent className="mt-[14px]">
                  {gearWomen.map((g) => (
                    <CarouselItem
                      key={g.title}
                      className="basis-full sm:basis-1/2"
                    >
                      <GearProductCard {...g} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-[84px] w-full max-w-[1344px]">
          <h2 className="mb-[25px] text-[22px] font-medium leading-[1.273] text-[#111111]">
            Don&apos;t Miss
          </h2>
          <WideImageStory
            image={IMG.flight}
            imageAlt="Jordan Brand flight essentials"
            title="FLIGHT ESSENTIALS"
            titleClass="text-[52px] leading-[1.15]"
            description="Your built-to-last, all-week wears—but with style only Jordan Brand can deliver."
            cta="Shop"
            ctaClass="px-[21.5px] py-[7.5px] pr-[21.88px]"
          />
        </section>

        <section className="mx-auto mt-[84px] w-full max-w-[1356px] pb-6">
          <Carousel opts={{ align: 'start', containScroll: 'trimSnaps' }}>
            <div className="mb-[25px] flex items-center justify-between gap-4">
              <h2 className="text-[23px] font-medium leading-[1.217] text-[#111111]">
                The Essentials
              </h2>
              <NikeCarouselNav />
            </div>
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative mx-auto w-full max-w-[440px]">
                  <img
                    src={IMG.essMen}
                    alt="Men's essentials"
                    className="h-[540px] w-full object-cover"
                    width={440}
                    height={540}
                  />
                  <div className="absolute bottom-[57px] left-12">
                    <button
                      type="button"
                      className="rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[20.69px] text-[15px] font-medium leading-[1.6] text-[#111111]"
                    >
                      Men&apos;s
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative mx-auto w-full max-w-[440px]">
                  <img
                    src={IMG.essWomen}
                    alt="Women's essentials"
                    className="h-[540px] w-full object-cover"
                    width={440}
                    height={540}
                  />
                  <div className="absolute bottom-[57px] left-12">
                    <button
                      type="button"
                      className="rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[22.39px] text-[15px] font-medium leading-[1.6] text-[#111111]"
                    >
                      Women&apos;s
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative mx-auto w-full max-w-[440px]">
                  <img
                    src={IMG.essKids}
                    alt="Kids' essentials"
                    className="h-[540px] w-full object-cover"
                    width={440}
                    height={540}
                  />
                  <div className="absolute bottom-[57px] left-12">
                    <button
                      type="button"
                      className="rounded-[30px] bg-[#FFFFFF] px-[21.5px] py-[7.5px] pr-[22.69px] text-[14px] font-medium leading-[1.714] text-[#111111]"
                    >
                      Kids&apos;
                    </button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>

        <section className="mx-auto mt-[84px] max-w-[880px] pb-4">
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4">
            <div>
              <h3 className="mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]">
                Icons
              </h3>
              <ul className="space-y-2">
                {['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'].map(
                  (t) => (
                    <li key={t}>
                      <a
                        href="#"
                        className="text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]"
                      >
                        {t}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]">
                Shoes
              </h3>
              <ul className="space-y-2">
                {[
                  'All Shoes',
                  'Custom Shoes',
                  'Jordan Shoes',
                  'Running Shoes',
                ].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[15px] font-medium leading-[1.6] text-[#111111]">
                Clothing
              </h3>
              <ul className="space-y-2">
                {[
                  'All Clothing',
                  'Modest Wear',
                  'Hoodies & Pullovers',
                  'Shirts & Tops',
                ].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[14px] font-medium leading-[1.714] text-[#111111]">
                Kids&apos;
              </h3>
              <ul className="space-y-2">
                {[
                  'Infant & Toddler Shoes',
                  "Kids' Shoes",
                  "Kids' Jordan Shoes",
                  "Kids' Basketball Shoes",
                ].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="text-[15px] font-medium leading-[1.6] text-[#757575] hover:text-[#111111]"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <div className="mt-2">
        <NikeFooter />
      </div>
    </div>
  )
}
