describe("Cart - total", () => {
  it("devrait retourner 0 pour un panier vide", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toBe(0);
  });
});
