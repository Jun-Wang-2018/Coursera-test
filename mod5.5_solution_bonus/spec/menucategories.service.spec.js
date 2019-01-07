describe('menuitemverification', function () {

  var menucategories;
  var $httpBackend;
  var ApiBasePath;
  var menuNumber = "L1";

  beforeEach(function () {
    module('MenuCategoriesApp');

    inject(function ($injector) {
      menucategories = $injector.get('MenuCategoriesService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiBasePath');
    });
  });

  it('should return item description', function() {
    $httpBackend.whenGET(ApiBasePath + "/menu_items/"+ menuNumber+".json").respond(['Special', 'Dessert']);
    menucategories.getMenuItem(menuNumber).then(function(response) {
      expect(response.data).toEqual(['Special', 'Dessert']);
    });
    $httpBackend.flush();
  });

});
