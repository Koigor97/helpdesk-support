import { mockUsers } from "@/lib/mockData";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle2, UserX } from "lucide-react";

export default function UsersPage() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>
          View and manage all support agent. Track their status, roles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Name</TableHead>
              <TableHead className="hidden md:table-cell">Job</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockUsers.map((u) => (
              <TableRow
                  key={u.id}
                  className=""
              >
                <TableCell>{u.name}</TableCell>
                <TableCell className="text-muted-foreground hidden md:table-cell">{u.job}</TableCell>
                <TableCell>
                  {u.isAvailable ? (
                    <span className="inline-flex items-center gap-1 text-emerald-600"><CheckCircle2 className="h-4 w-4"/> Available</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-600"><UserX className="h-4 w-4"/> Not available</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
