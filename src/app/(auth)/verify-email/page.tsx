import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function page({ searchParams }: PageProps) {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail />
          </div>
        ) : (
          <div className="flex flex-col h-full items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <h1 className="text-2xl  text-center">
                We have sent you a{" "}
                <span className="text-red-500 font-bold">
                  verification link!
                </span>
              </h1>
              <p className="text-muted-foreground text-center">
                Check your email{" "}
                <span className="font-semibold">{toEmail}</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
