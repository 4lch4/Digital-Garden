1. <% tp.date.now() %>
2. <% tp.date.now("Do MMMM YYYY") %>
3. <% tp.date.now("dddd Do MMMM YYYY", -7) %>
4. <% tp.date.now("dddd Do MMMM YYYY, ddd") %>
5. <% tp.date.now("dddd Do MMMM YYYY", 7) %>
6. <% tp.date.now("YYYY-MM-DD", "P-1M") %>
7. <% tp.date.now("YYYY-MM-DD", "P1Y") %>
8. <% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>
9. <% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>
10. <% tp.date.tomorrow("Do MMMM YYYY") %>
11. <% tp.date.weekday("YYYY-MM-DD", 0) %>
12. <% tp.date.weekday("YYYY-MM-DD", 7) %>
13. <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>
14. <% tp.date.weekday("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>
15. <% tp.date.yesterday("Do MMMM YYYY") %>
