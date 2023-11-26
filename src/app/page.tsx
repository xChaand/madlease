import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { BadgeCheck, Speech, HeartHandshake } from "lucide-react";

const perks = [
  {
    name: "Verified User Profiles",
    icon: BadgeCheck,
    desc: "Trust is paramount in leasing transactions. MadLease prioritizes safety and transparency by implementing a robust user verification system. Verified profiles instill confidence in users, fostering a secure environment for both landlords and tenants to connect.",
  },
  {
    name: "Responsive Customer Support",
    icon: Speech,
    desc: "Exceptional customer support sets MadLease apart. Our dedicated team is readily available to assist users throughout their leasing journey. Whether it's troubleshooting technical issues or offering guidance on the leasing process, MadLease ensures a seamless and stress-free experience for all users.",
  },
  {
    name: "Interactive Virtual Tours",
    icon: HeartHandshake,
    desc: "adLease enhances the leasing experience with immersive virtual tours. Users can explore properties remotely, saving time and effort. This feature not only streamlines the decision-making process but also allows for a more comprehensive evaluation of potential properties.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center fle flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for <span className="text-red-600">leasing</span>{" "}
            and <span className="text-red-600">subleasing</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            MadLease: Your key to hassle-free leasing! Discover the perfect
            tenant or find your dream lease effortlessly on our dynamic online
            marketplace.
          </p>
          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-6">
            <Link href="/lease" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: Lit products*/}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gpa-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium font-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
