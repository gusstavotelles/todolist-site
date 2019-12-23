import angular from "angular";

let homeModule = angular.module("home", []);
import HomeConfig from "./home.config";
homeModule.config(HomeConfig);

homeModule.controller("HomeCtrl", HomeCtrl);
function HomeCtrl($scope) {
  var vm = this;
  vm.tarefasList = [];
  vm.tarefasPendentesList = [];
  vm.tarefasFeitasList = [];

  vm.adiciona = function() {
    var id = vm.tarefasList[vm.tarefasList.length - 1];
    vm.tarefasList.push({ id: id ? id : 1, nome: vm.nome, status: false });
    vm.tarefasPendentesList.push({ id: id ? id : 1, nome: vm.nome, status: false });
    // $http
    //   .post("/api/tarefas", {
    //     id: id,
    //     nome: vm.nome,
    //     status: status
    //   })
    //   .then(
    //     function(response) {
    //       console.log("tarefa cadastrada");
    //       vm.nome = null;
    //     },
    //     function(response) {
    //       console.log("Um erro ocorreu, os dados não foram salvos.");
    //     }
    //   );
    console.log(vm.tarefasList);

    vm.nome = null;
  };

  vm.alteraStatus = function(id) {
    console.log(id);
    // if (tarefa.status) {
    //   tarefasFeitasList.push(vm.tarefasList.find(x => x.id === tarefa.id));
    // } else {
    //   tarefasPendentesList.push(vm.tarefasList.find(x => x.id === tarefa.id));
    // }
    // vm.tarefasList.push({ nome: vm.nome, status: false });
    // vm.nome = null;
  };
}
export default homeModule;
