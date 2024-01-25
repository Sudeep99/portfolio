'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function SkillsTable() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>CATEGORY</TableColumn>
        <TableColumn>SKILLS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Languages</TableCell>
          <TableCell>C++, C#, QT Markup Language (QML) Java, Python, Typescript</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Hardware</TableCell>
          <TableCell>Arduino, Raspberry Pi, LPC 1768</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Databases</TableCell>
          <TableCell>PostgreSQL, MySQL, PlanetScale DB</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Software</TableCell>
          <TableCell>GitHub, NI LabVIEW, MATLAB Simulink, VMware , Jira, Visio</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
