import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/layout/Header";  
import FloatingWhatsApp from "../components/layout/FloatingWhatsApp";
import WelcomePopup from "../components/layout/WelcomePopup";
export const metadata: Metadata = {
  title: "By Hiba",
  description: "Handcrafted jewelry and accessories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-white text-black antialiased">
        {process.env.NODE_ENV === "development" && (
          <Script id="remove-extension-attributes" strategy="beforeInteractive">
            {`(function () {
              var isInjectedAttribute = function (name) {
                return name.indexOf("bis_") === 0 || name.indexOf("__processed_") === 0;
              };
              var clean = function (element) {
                if (!element || element.nodeType !== 1) return;
                Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
                  if (isInjectedAttribute(attribute.name)) element.removeAttribute(attribute.name);
                });
              };
              clean(document.documentElement);
              new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                  if (mutation.type === "attributes") clean(mutation.target);
                  Array.prototype.forEach.call(mutation.addedNodes, function (node) {
                    if (node.nodeType === 1) {
                      clean(node);
                      Array.prototype.forEach.call(node.querySelectorAll("*"), clean);
                    }
                  });
                });
              }).observe(document.documentElement, { attributes: true, childList: true, subtree: true });
            })();`}
          </Script>
        )}

        <Header />

        {children}

        <FloatingWhatsApp />
        <WelcomePopup />
      </body>
    </html>
  );
}