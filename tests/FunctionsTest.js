describe("HTML and CSS Tasks", function () {
  it("Task 1: Should set the font weight of heading to bold", function () {
    const heading = document.getElementById("heading1");
    expect(heading.style.fontWeight).toBe("bold");
  });

  it("Task 2: Should add 10px padding to the div with id 'container'", function () {
    const container = document.getElementById("container");
    expect(container.style.padding).toBe("10px");
  });

  it("Task 3: Should set the border color of the box to red", function () {
    const box = document.getElementById("box");
    expect(box.style.borderColor).toBe("red");
  });

  it("Task 4: Should create an unordered list with 5 items", function () {
    const ul = document.querySelector("ul");
    const items = ul.getElementsByTagName("li");
    expect(items.length).toBe(5);
  });
  it("Task 5: Should open the link in a new tab", function () {
    const link = document.querySelector("a");
  
    // Ensure the link is present and valid
    expect(link).not.toBeNull();
  
    // Ensure the 'target' attribute exists
    expect(link.hasAttribute("target")).toBe(true);
  
    // Ensure the 'target' attribute is exactly '_blank'
    const target = link.getAttribute("target");
    expect(target).toBe("_blank");
  
    // Ensure the 'href' is correctly set to 'https://www.example.com'
    const href = link.getAttribute("href");
    expect(href).toBe("https://www.example.com");
  });

  it("Task 6: Should change the button's background color to green on hover", function () {
    const button = document.getElementById("hoverButton");

    // Simulate hover event
    const event = new Event("mouseover");
    button.dispatchEvent(event);

    // Check computed style after hover
    const computedStyle = getComputedStyle(button);
    expect(computedStyle.backgroundColor).toBe("green"); // Green in RGB
  });
});
