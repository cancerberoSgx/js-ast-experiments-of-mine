const foo: string = '1'
interface I {
  me(s: string): number[]
}
class A implements I {
  private oo: number[] = []
  me(s: string): number[] {
    for (let foo = 0; foo < this.oo.length; foo++) {
      const element = this.oo[foo];
    }
    return []
  }
}