exports.ids=[5],exports.modules={34:function(e,t,n){"use strict";n.r(t);var a=n(195),o=n(0),r=n.n(o),c=n(7),l=n(17),u=n(2);describe("App component",function(){it('Invalid path renders "Not Found" page',function(){var e=Object(a.mount)(r.a.createElement(c.MemoryRouter,{initialEntries:["/random"]},r.a.createElement(l.default,null)));expect(e.find(u.default)).toHaveLength(1),e.unmount()}),it("Renders correctly",function(){var e=Object(a.shallow)(r.a.createElement(l.default,null));expect(e).toMatchSnapshot()})})}};