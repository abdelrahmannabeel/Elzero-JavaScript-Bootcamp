let theTitle = "Elzero";
theDescription = "Elzero Web School";
theDate = "25 / 10";
card = `
<div class="card">
<h3>Hello ${theTitle}</h3>
<P>${theDescription}</P>
<span>${theDate}</span>
</div>
`;
result = card.repeat(5);
document.write(result);
