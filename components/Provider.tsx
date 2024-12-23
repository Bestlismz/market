import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/toaster";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
}
export default Provider;
