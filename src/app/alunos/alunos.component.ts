import { Component, OnInit } from '@angular/core';
import { AlunoModel } from '../aluno';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  aluno:AlunoModel = new AlunoModel()
  
  alunos:Array<any>= new Array();

  constructor( private alunosService: AlunosService) { }

  ngOnInit(): void {
  this.listarAlunos()
  }

  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(alunos=>{
      this.alunos = alunos
    }, err=>{
      console.log('Erro listarAlunos()', err)
    })
  }

  cadastrar(){
    console.log(this.aluno)

    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno=>{
      this.aluno= new AlunoModel();
      this.listarAlunos()
    })
  }

  atualizar(id:number){
    this.alunosService.atualizarAluno(id,this.aluno).subscribe(aluno=>{
      this.aluno= new AlunoModel();
      this.listarAlunos()
    })
  }

  remover(id:number){
    this.alunosService.removerAluno(id).subscribe(aluno=>{
      this.aluno= new AlunoModel();
      this.listarAlunos()
    })
  }
}
