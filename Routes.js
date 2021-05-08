module.exports = (server, app) => {
    server.get('/about/', (request, result) => {
        app.render(request, result, '/about');
    });
//Guaranteed to show about page
server.get('./about/:page', (request, result) => {
    app.render(request, result, 'about');
});
//If page isn't rendered as it should be
server.get('/about', (request, result) => {
    app.render(request, result, '/about');
});
//Contact Page not rendered correctly this happens
server.get('/contact/', (request, result) =>{
app.render(request, result, '/contact');
});
//Gets Contact page regardless
server.get('/contact/:page', (request, result) => {
    app.render(request, result, '/contact');
});
}