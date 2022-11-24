import { MarketplaceUrlResolver } from "@saleor/marketplace/marketplace-url-resolver";

describe("MarketplaceUrlResolver", function() {
  it("Resolves deep marketplace url from full path", () => {
    const resolver = new MarketplaceUrlResolver();

    expect(
      resolver.getMarketplaceDeepUrlFromPath("/marketplace/saleor-apps"),
    ).toEqual("/saleor-apps");
  });

  it("Generates full dashboard url that points to Marketplace - Saleor Apps", () => {
    const resolver = new MarketplaceUrlResolver();

    expect(
      resolver.getSaleorAppsDashboardUrl("http://localhost:9000/apps"),
    ).toEqual("http://localhost:9000/marketplace/saleor-apps");
  });

  it("Generates full dashboard url that points to Marketplace - App Template Gallery", () => {
    const resolver = new MarketplaceUrlResolver();

    expect(
      resolver.getTemplateGalleryDashboardUrl("http://localhost:9000/apps"),
    ).toEqual("http://localhost:9000/marketplace/template-gallery");
  });
});
