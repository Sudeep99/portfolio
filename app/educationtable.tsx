'use client'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export default function EducationTable() {
    return (
        <Table aria-label="Example static collection table">
            <TableHeader>
                <TableColumn>SCHOOL</TableColumn>
                <TableColumn>LOCATION</TableColumn>
                <TableColumn>DEGREE</TableColumn>
                <TableColumn>TIMELINE</TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell>Vellore Institute of Technology</TableCell>
                    <TableCell>Amaravati, Andhra Pradesh</TableCell>
                    <TableCell>Bachelors, Electronics and Communications Engineering</TableCell>
                    <TableCell>Jul 2017-Jun 2021</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell>Padma Seshadri Bala Bhavan - K.K Nagar</TableCell>
                    <TableCell>Chennai, Tamli Nadu</TableCell>
                    <TableCell>High School</TableCell>
                    <TableCell>Jun 2015- May 2017</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}
