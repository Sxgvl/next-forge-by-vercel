import "./styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AnalyticsProvider } from "@repo/analytics/provider";
import { Toolbar as CMSToolbar } from "@repo/cms/components/toolbar";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
import { cn } from "@repo/design-system/lib/utils";
import { Toolbar } from "@repo/feature-flags/components/toolbar";
import { getDictionary } from "@repo/internationalization";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

type RootLayoutProperties = {
  readonly children: ReactNode;
  readonly params: Promise<{
    locale: string;
  }>;
};

const RootLayout = async ({ children, params }: RootLayoutProperties) => {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <html
      className={cn(fonts, "scroll-smooth")}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ClerkProvider>
          <AnalyticsProvider>
            <DesignSystemProvider>
              <Header dictionary={dictionary} />
              {children}
              <Footer />
            </DesignSystemProvider>
            <Toolbar />
            <CMSToolbar />
          </AnalyticsProvider>
        </ClerkProvider>
      </body>
    </html>
  );
};

export default RootLayout;
