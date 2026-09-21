import { describe, it, expect, beforeEach } from "vitest";
import { LocaleCode } from "@/constants/locale";
import { setLocalStorageLocale } from "@/utils/setLocalStorageLocale";
import { setDocumentLang } from "@/utils/setDocumentLang";

describe("Locale Utilities", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("lang");
    document.documentElement.removeAttribute("dir");
  });

  it("should set and return locale in localStorage", () => {
    const locale = setLocalStorageLocale(LocaleCode.ZH_CN);
    expect(locale).toBe(LocaleCode.ZH_CN);
    expect(localStorage.locale).toBe(LocaleCode.ZH_CN);
  });

  it("should fallback to default locale if not specified", () => {
    const locale = setLocalStorageLocale();
    expect(locale).toBe(LocaleCode.EN_US);
  });

  it("should update document lang and dir attributes", () => {
    setDocumentLang(LocaleCode.EN_US);
    expect(document.documentElement.getAttribute("lang")).toBe(
      LocaleCode.EN_US
    );
    expect(document.documentElement.getAttribute("dir")).toBeNull();
  });
});
