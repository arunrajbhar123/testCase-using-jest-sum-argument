const sum=require("./index.js")
describe("Testing sum Function",()=>{
  test("add 2 positive number",()=>{
    expect(sum(1,2)).toBe(3);
  })
  test("add 2 positive number",()=>{
    expect(sum("1","2")).toBe(3);
  })
  test("add 3 positive number string to number",()=>{
    expect(sum("1","2","3")).toBe(6);
  })
  test("add 3 positive number",()=>{
    expect(sum(1,2,3)).toBe(6);
  })
  test("Only One argument",()=>{
    expect(sum(1)).toBe("Atleast Two Arguments Require");
  })
  test("Only One argument string to Number",()=>{
    expect(sum("1")).toBe("Atleast Two Arguments Require");
  })
  test("add floating to integer",()=>{
    expect(sum(1.5,1.5)).toBe(3);
  })
  test("add floating string  to Number integer",()=>{
    expect(sum("1.5","1.5")).toBe(3);
  })
  test("add Negative Number string to number",()=>{
    expect(sum("-1.5","-1.5")).toBe(-3);
  })
  test("add Negative Number   ",()=>{
    expect(sum(-1.5,-1.5)).toBe(-3);
  })
  test("No Argument ",()=>{
    expect(sum()).toBe("atleast Two argument are Require");
  })
})