describe("Cart - total", () => {
  it("devrait retourner 0 pour un panier vide", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });

  it("devrait totaliser le prix d’un seul produit", () => {
    const cart = new Cart();
    cart.addProduct({ name: "Livre", price: 25 });
    expect(cart.getTotal()).toBe(25);
  });
});

export class Cart {
  private items: { name: string; price: number }[] = [];

  addProduct(product: { name: string; price: number }): void {
    this.items.push(product);
  }

  getTotal(): number {
    return this.items.reduce((sum, p) => sum + p.price, 0);
  }
}
