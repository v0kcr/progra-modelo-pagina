// admin/controllers/enterprise_controllers.js

export function home(req, res) {
  return res.render('enterprise/home', {
    title: 'Bienvenido Enterprise',
  });
}