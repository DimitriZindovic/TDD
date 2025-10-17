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

  it("devrait totaliser plusieurs produits", () => {
    const cart = new Cart();
    cart.addProduct({ name: "Clavier", price: 60 });
    cart.addProduct({ name: "Souris", price: 40 });
    expect(cart.getTotal()).toBe(100);
  });

  it("applique 10% de remise si le total dépasse strictement 100€", () => {
    const cart = new Cart();
    cart.addProduct({ name: "Écran", price: 120 });
    expect(cart.getTotal()).toBe(108);
  });

  it("n applique pas de remise si le total est exactement 100€", () => {
    const cart = new Cart();
    cart.addProduct({ name: "Pack", price: 100 });
    expect(cart.getTotal()).toBe(100);
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
