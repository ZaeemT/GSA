import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
		<main className="flex flex-col min-h-[100dvh] space-y-10">
	    	<ThemeProvider
        	    attribute="class"
        	    defaultTheme="system"
        	    enableSystem
        	    disableTransitionOnChange
				>
				<Navbar />
      			<Component {...pageProps} />;
			</ThemeProvider>
		</main>
    </>
  ) 
}
